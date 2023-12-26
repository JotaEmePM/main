import React from "react"
import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorPage: React.FC = () => {

    const error = useRouteError()
    let errorResponse: ErrorResponse = { data: 0, status: 0, statusText: ''}
    if(isRouteErrorResponse(error))
        errorResponse = error as ErrorResponse

    return (
        <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex item-center pt-8 sm:justify-start sm:pt-0">
                    <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        {errorResponse.status}
                    </div>
                    <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        {errorResponse.statusText}
                    </div>
                </div>
            </div>
        </div>
    )
}