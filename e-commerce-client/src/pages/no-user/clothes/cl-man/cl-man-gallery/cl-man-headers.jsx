import React from "react";


export const msHeaders = [`MS-1`, `MS-2`, `MS-3`, `MS-4`];
export const msPaths = ['ms-1', 'ms-2', 'ms-3', 'ms-4'];
export const msPrices = ['$10.0', '$15.0', '$20.0', '$25.0']


export const jkHeaders = ['JK-1', 'JK-2', 'JK-3', 'JK-4'];
export const jkPaths = ['jk-1', 'jk-2', 'jk-3', 'jk-4'];
export const jkPrices = ['$18.0', '$19.0', '$34.0', '$45.0']

export const mstHeaders = [`MST-1`, 'MST-2', 'MST-3', 'MST-4'];
export const mstPaths = ['mst-1', 'mst-2', 'mst-3', 'mst-4'];
export const mstPrices = ['$22.9', '$25.8', '$54.2', '$65.3']


export const mshHeaders = ['MSH-1', 'MSH-2', 'MSH-3', 'MSH-4'];
export const mshPaths = ['msh-1', 'msh-2', 'msh-3', 'msh-4'];
export const mshPrices = ['$11.4', '$17.5', '$24.8', '$32.3']

export const ClHeaders = ({headers, prices}) => {
    return (
        <div>
            <div className={`clothes-items-header`}>
                {headers && headers.map((header, index) => (
                    <div key={`header-${index}`} className={`flex flex-row space-x-2`}>
                        <h1 tabIndex={index}>
                            {header}
                        </h1>
                        {prices && prices[index] && (
                            <h1 className={`font-display text-green-400`}>
                                {prices[index]}
                            </h1>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}