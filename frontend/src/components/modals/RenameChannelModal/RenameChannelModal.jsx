import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import {
  Modal as BootstrapModal, Form, FormGroup, FormControl, FormLabel, Button,
} from 'react-bootstrap';
import { toast } from 'react-toastify';
import filter from 'leo-profanity';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEditChannelMutation, useGetChannelsQuery } from '../../../api/channelsApi';
import { setCurrentChannel, selectCurrentChannelId } from '../../../store/slices/channelsSlice';
import { selectChannelId, selectChannelName } from '../../../store/slices/modalsSlice';
import LoadingSpinner from '../../LoadingSpinner';
import getChannelNameSchema from './ValidationSchema';

const RenameChannelModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const inputRef = useRef(null);

  const { data: channels = [] } = useGetChannelsQuery('');

  const channelNames = channels.map((channel) => channel.name);
  const channelNameSchema = getChannelNameSchema(t, channelNames);

  const channelId = useSelector(selectChannelId);
  const currentChannelId = useSelector(selectCurrentChannelId);
  const channelName = useSelector(selectChannelName);

  const [renameChannel, { isLoading }] = useEditChannelMutation();

  useEffect(() => {
    inputRef.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: channelName,
      channelId,
    },
    validationSchema: channelNameSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          name: filter.clean(values.name.trim()),
          id: values.channelId,
          removable: true,
        };
        const updatedChannel = await renameChannel(data).unwrap();
        toast.success(t('toasts.renameChannel'));
        if (updatedChannel.id === currentChannelId) {
          dispatch(setCurrentChannel(updatedChannel));
        }
      } catch (err) {
        toast.error(t('toasts.connectionError'));
      }
      handleClose();
    },
  });

  return (
    <>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          {t('modals.renameTitle')}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              id="name"
              name="name"
              ref={inputRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              disabled={formik.isSubmitting}
              isInvalid={formik.touched.name && formik.errors.name}
              className="mb-2"
            />
            <FormLabel visuallyHidden htmlFor="name">{t('modals.channelName')}</FormLabel>
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button
              type="button"
              variant="secondary"
              className="me-2"
              onClick={handleClose}
              disabled={formik.isSubmitting}
            >
              {t('modals.cancel')}
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={!formik.dirty || formik.isSubmitting}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  <span>{t('modals.send')}</span>
                </>
              ) : (
                t('modals.send')
              )}
            </Button>
          </div>
        </Form>
      </BootstrapModal.Body>
    </>
  );
};

export default RenameChannelModal;
