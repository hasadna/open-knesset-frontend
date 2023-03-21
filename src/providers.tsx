import React, { useState , useMemo} from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Route } from "react-router-dom";
import App from './App'



export default function Providers() {

    const queryClient = new QueryClient()
    
    return (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                        <Route exact path="/" component={App} />
                </BrowserRouter>
            </QueryClientProvider>
    )
}