
import React from 'react'
import Header from '../shared/Header'

export default function Layout({children}) {

    return (
        <>
        <div>
            <Header />
        </div>
        <main>{children}</main>
        </>
    )
}