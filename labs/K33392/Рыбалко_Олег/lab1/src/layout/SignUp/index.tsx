import { useTranslation } from 'react-i18next'
import styles from './SignUp.module.scss'

export function SignUpLayout() {
  const { t } = useTranslation('signup')
  const { t: tGlobal } = useTranslation('global')

  return (
    <div
      className={`container d-flex justify-content-center align-items-center ${styles.signupContainer}`}
    >
      <form>
        <h1>{tGlobal('title')}</h1>
        <h2 className="h3 mb-3 fw-normal">{t('createAccount')}</h2>

        <div className="form-floating">
          <input
            type="email"
            className={`form-control ${styles.formEmail}`}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">{t('emailLabel')}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${styles.formPassword}`}
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">{t('passwordLabel')}</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={`form-control ${styles.formRetypePassword}`}
            id="floatingRetypePassword"
          />
          <label htmlFor="floatingPassword">{t('retypePasswordLabel')}</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          {t('signupButton')}
        </button>
      </form>
    </div>
  )
}

