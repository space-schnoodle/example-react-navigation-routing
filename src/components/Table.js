function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.name}>{column.label}</th>
    });

    const renderredRows = data.map((rowData)=> {
        const renderedCells = config.map((column)=> {
            return <td className="p-3" key={column.name}>
                {column.render(rowData)}
            </td>  
        });
        return (
            <tr className="border-b border-gray-100" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2 border-gray-200">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderredRows}
            </tbody>
        </table>
    );
};

export default Table;