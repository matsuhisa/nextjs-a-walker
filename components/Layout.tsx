import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'めも帖' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'layout-body'}>
        <header className={'global-header'}>
          <Link href={'/'}>
            <a className={'global-header__label'}>めも帖</a>
          </Link>
        </header>
        {children}
      </div>
      <footer className={'global-footer'}>
        <Link href={'/about'}>
          <a className={'global-footer__label'}>書いている人</a>
        </Link>
      </footer>
    </>
  )
}

export default Layout
