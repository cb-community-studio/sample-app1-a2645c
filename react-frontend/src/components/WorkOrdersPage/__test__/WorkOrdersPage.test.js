import React from "react";
import { render, screen } from "@testing-library/react";

import WorkOrdersPage from "../WorkOrdersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders workOrders page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <WorkOrdersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("workOrders-datatable")).toBeInTheDocument();
    expect(screen.getByRole("workOrders-add-button")).toBeInTheDocument();
});
