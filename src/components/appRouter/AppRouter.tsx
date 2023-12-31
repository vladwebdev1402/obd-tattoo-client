import BasketPage from "@/pages/BasketPage/BasketPage";
import BrandPage from "@/pages/BrandPage/BrandPage";
import ContactsPage from "@/pages/ContactsPage/ContactsPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import ItemPage from "@/pages/ItemPage/ItemPage";
import MainPage from "@/pages/MainPage/MainPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import PromocodesPage from "@/pages/PromocodesPage/PromocodesPage";
import Root from "@/pages/Root/Root";
import ServicesPage from "@/pages/ServicesPage/ServicesPage";
import CatalogCategoryPage from "@/pages/CatalogCategoryPage/CatalogCategoryPage";
import React, { FC, useEffect, useMemo, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CatalogPage from "@/pages/CatalogPage/CatalogPage";
import AuthSignupPage from "@/pages/AuthSignupPage/AuthSignupPage";
import AuthLoginPage from "@/pages/AuthLoginPage/AuthLoginPage";
import AuthStore from "@/store/AuthStore/AuthStore";
import { urls } from "@/clientUrls/clientUrls";
import { observer } from "mobx-react-lite";

const AppRouter: FC = observer(() => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(AuthStore.auth);
  }, [AuthStore.auth]);
  useEffect(() => {
    AuthStore.checkAuth();
  }, []);
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <Route path={urls.main} element={<Root />}>
          <Route index element={<MainPage />} />
          {auth ? (
            <>
              <Route path={urls.basket} element={<BasketPage />} />
              <Route path={urls.services} element={<ServicesPage />} />
              <Route path={urls.profile} element={<ProfilePage />} />
            </>
          ) : (
            <>
              <Route path={urls.signup} element={<AuthSignupPage />} />
              <Route path={urls.login} element={<AuthLoginPage />} />
            </>
          )}
          <Route path={urls.promocodes} element={<PromocodesPage />} />
          <Route path={urls.contacts} element={<ContactsPage />} />
          <Route path={urls.catalog} element={<CatalogPage />} />
          <Route
            path={urls.catalogCategory}
            element={<CatalogCategoryPage />}
          />
          <Route path={urls.item} element={<ItemPage />} />
          <Route path={urls.brand} element={<BrandPage />} />
          <Route path={urls.notFound} element={<ErrorPage />} />
        </Route>
      )
    );
  }, [auth]);
  return <RouterProvider router={router} />;
});

export default AppRouter;
