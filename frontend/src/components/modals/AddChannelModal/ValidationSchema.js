import { object, string } from 'yup';

const getChannelNameSchema = (t, channelNames) => object().shape({
  name: string()
    .transform((value) => value.trim())
    .notOneOf(channelNames, t('errors.channelExists'))
    .min(3, t('errors.minMaxLength'))
    .max(20, t('errors.minMaxLength'))
    .required(t('errors.required')),
});

export default getChannelNameSchema;
