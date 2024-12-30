import { useTranslation } from 'react-i18next';
import signUpImage from '../../../assets/images/signUp.jpg';
import SignUpForm from './SignUpForm';
import AuthPageContainer from '../AuthPagesContainer';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <AuthPageContainer
      imgSrc={signUpImage}
      imgAlt={t('signUpForm.signUp')}
    >
      <SignUpForm />
    </AuthPageContainer>
  );
};

export default SignUpPage;
