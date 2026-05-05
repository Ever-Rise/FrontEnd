import React, { Component, Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Loader from "../components/common/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const SobrePage = lazy(() => import("../pages/SobrePage"));
const ProdutoPage = lazy(() => import("../pages/ProdutoPage"));
const VendasPage = lazy(() => import("../pages/VendasPage"));
const ParceirosPage = lazy(() => import("../pages/ParceirosPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const ControlePage = lazy(() => import("../pages/ControlePage"));
const ManualPage = lazy(() => import("../pages/ManualPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const PagamentoPage = lazy(() => import("../pages/PagamentoPage"));
const SustentabilidadePage = lazy(
  () => import("../pages/SustentabilidadePage"),
);
const SuportePage = lazy(() => import("../pages/SuportePage"));

class RouterErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log detalhado para facilitar suporte e observabilidade.
    console.error("Erro no roteamento da aplicacao:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          style={{
            alignItems: "center",
            display: "grid",
            minHeight: "100vh",
            padding: "1.5rem",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <h1>Algo deu errado ao carregar esta tela</h1>
            <p>
              Tente atualizar a pagina. Se o problema continuar, contate o
              suporte EVERRISE.
            </p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

const NotFoundPage = () => (
  <main
    style={{
      alignItems: "center",
      display: "grid",
      minHeight: "100vh",
      padding: "1.5rem",
      placeItems: "center",
      textAlign: "center",
    }}
  >
    <div>
      <h1>404 - Pagina nao encontrada</h1>
      <p>Verifique o endereco digitado ou volte para o inicio.</p>
    </div>
  </main>
);

const withSuspense = (Component) => (
  <Suspense fallback={<Loader fullPage />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: (
      <RouterErrorBoundary>
        <App />
      </RouterErrorBoundary>
    ),
    children: [
      { path: "/", element: withSuspense(LandingPage) },
      { path: "/sobre", element: withSuspense(SobrePage) },
      { path: "/produto", element: withSuspense(ProdutoPage) },
      { path: "/vendas", element: withSuspense(VendasPage) },
      { path: "/parceiros", element: withSuspense(ParceirosPage) },
      {
        element: <PublicRoute />,
        children: [
          { path: "/login", element: withSuspense(LoginPage) },
          { path: "/register", element: withSuspense(RegisterPage) },
          {
            path: "/forgot-password",
            element: withSuspense(ForgotPasswordPage),
          },
          { path: "/checkout", element: withSuspense(CheckoutPage) },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [
          { path: "/dashboard", element: withSuspense(DashboardPage) },
          { path: "/controle", element: withSuspense(ControlePage) },
          { path: "/manual", element: withSuspense(ManualPage) },
          { path: "/pagamento", element: withSuspense(PagamentoPage) },
          {
            path: "/sustentabilidade",
            element: withSuspense(SustentabilidadePage),
          },
          { path: "/suporte", element: withSuspense(SuportePage) },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
