import { object, string, ref } from 'yup';

const getSignupSchema = (t) => object().shape({
  username: string()
    .min(3, t('errors.minMaxLength'))
    .max(20, t('errors.minMaxLength'))
    .required(t('errors.required')),
  password: string()
    .min(6, t('errors.minLength'))
    .required(t('errors.required')),
  confirmPassword: string()
    .oneOf([ref('password')], t('errors.passwordMatch'))
    .required(t('errors.required')),
});

export default getSignupSchema;
