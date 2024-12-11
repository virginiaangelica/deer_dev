import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import LupaSandiPage from "@/pages/auth/LupaSandiPage";
import KataSandiBaruPage from "@/pages/auth/KataSandiBaruPage";
import ProfilPage from "@/pages/auth/ProfilPage";
import DashboardPage from "@/pages/auth/DashboardPage";
import TipsPage from "@/pages/auth/TipsPage";
import PilihBahanPage from "./pages/auth/PilihBahanPage";
import PaduanWarnaPage from "@/pages/auth/PaduanWarnaPage";
import AksesorisPage from "@/pages/auth/AksesorisPage";
import EditProfilPage from "@/pages/auth/EditProfilPage";
import FashionStylePage from "@/pages/auth/FashionStylePage";
import KaosPage from "@/pages/auth/KaosPage";
import FavoritPage from "@/pages/auth/FavoritPage";
import TambahKeranjangPage from "@/pages/auth/TambahKeranjangPage";
import KeranjangPage from "./pages/auth/KeranjangPage";
import CODPage from "./pages/auth/CODPage";
import BCAPage from "./pages/auth/BCAPage";
import BCA2Page from "./pages/auth/BCA2Page";
import HomeAdminPage from "./pages/auth/HomeAdminPage";
import KelolaPesananPage from "./pages/auth/KelolaPesananPage";
import KelolaProdukPage from "./pages/auth/KelolaProdukPage";
import KelolaMemberPage from "./pages/auth/KelolaMemberPage";
import KelolaPembayaranPage from "./pages/auth/KelolaPembayaranPage";
import ProfilAdminPage from "./pages/auth/ProfilAdminPage";
import EditProfilAdminPage from "./pages/auth/EditProfilAdminPage";
import LoginAdminPage from "./pages/auth/LoginAdminPage";
import LupaSandiAdminPage from "./pages/auth/LupaSandiAdminPage";
import SandiBaruAdminPage from "./pages/auth/SandiBaruAdminPage";
import BatalPesananPage from "./pages/auth/BatalPesananPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/lupa-sandi",
    element: <LupaSandiPage />,
  },
  {
    path: "/sandi-baru",
    element: <KataSandiBaruPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/tips",
    element: <TipsPage />,
  },
  {
    path: "/pilih-bahan",
    element: <PilihBahanPage />,
  },
  {
    path: "/paduan-warna",
    element: <PaduanWarnaPage />,
  },
  {
    path: "/aksesoris",
    element: <AksesorisPage />,
  },
  {
    path: "/edit-profil",
    element: <EditProfilPage />,
  },
  {
    path: "/fashion-style",
    element: <FashionStylePage />,
  },
  {
    path: "/kaos",
    element: <KaosPage />,
  },
  {
    path: "/favorit",
    element: <FavoritPage />,
  },
  {
    path: "/tambah-keranjang",
    element: <TambahKeranjangPage />,
  },
  {
    path: "/keranjang",
    element: <KeranjangPage />,
  },
  {
    path: "/cod",
    element: <CODPage />,
  },
  {
    path: "/bca",
    element: <BCAPage />,
  },
  {
    path: "/bca2",
    element: <BCA2Page />,
  },
  {
    path: "/home-admin",
    element: <HomeAdminPage />,
  },
  {
    path: "/kelola-pesanan",
    element: <KelolaPesananPage />,
  },
  {
    path: "/kelola-produk",
    element: <KelolaProdukPage />,
  },
  {
    path: "/kelola-member",
    element: <KelolaMemberPage />,
  },
  {
    path: "/kelola-pembayaran",
    element: <KelolaPembayaranPage />,
  },
  {
    path: "/profil-admin",
    element: <ProfilAdminPage />,
  },
  {
    path: "/Editprofil-admin",
    element: <EditProfilAdminPage />,
  },
  {
    path: "/login-admin",
    element: <LoginAdminPage />,
  },
  {
    path: "/lupasandi-admin",
    element: <LupaSandiAdminPage />,
  },
  {
    path: "/sandibaru-admin",
    element: <SandiBaruAdminPage />,
  },
  {
    path: "/batal-pesanan",
    element: <BatalPesananPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
