import { Navbar } from "./components/Navbar";

interface AppLayoutProps {
    children: React.ReactNode;
    }

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
    <Navbar />
    { children }
    </>
  )
}
