
import React from 'react'
import Header from '../shared/Header'

export default function Layout({children}) {

    return (
        <>
        <div className="flex flex-col">
            <div className="p-2">
                <Header />
            </div> 
            <main className="mt-3">{children}</main>

            <footer className="mt-3">
                <p>&copy; 2023 ApexDevelopers. All rights reserved.</p>
            </footer>
        </div>
        </>
    )
}