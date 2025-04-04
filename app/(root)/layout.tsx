/*
 * @Date: 2025-03-31 13:58:25
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-03 16:57:52
 */
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
      <Toaster />
    </main>
  );
}
