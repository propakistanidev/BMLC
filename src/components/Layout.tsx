// components/Layout.tsx
import ScrollToTop from './ScrollToTop'
import TopBar from './TopBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Alert from './Alert'

export default function Layout() {
    return (
        <>
            <ScrollToTop />
            <Alert />
            <div className="overflow-x-hidden min-h-screen">
                <TopBar />
                <main className="overflow-x-hidden">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
