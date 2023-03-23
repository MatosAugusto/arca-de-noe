import { NavBar } from "../components/NavBar";


function ViewDogs() {
    const dogs = [
        { 
            id: '1',
            dog_name: 'Tchê',
            breed: 'Pastor Alemão',
            description: '4 anos',
            url_image: '2023-02-10',
            phone: '91111-1111'
        },
        { 
            id: '2',
            dog_name: 'Canela',
            breed: 'Vira-Lata',
            description: '2 anos',
            url_image: '2023-02-10',
            phone: '92222-2222'
        },
        { 
            id: '3',
            dog_name: 'Bob',
            breed: 'Puddle',
            description: '10 anos',
            url_image: '2023-02-10',
            phone: '93333-3333'
        },
        { 
            id: '4',
            dog_name: 'Flor',
            breed: 'Pitbull',
            description: '1 ano',
            url_image: '2023-02-10',
            phone: '94444-4444'
        }
    ];

    const dogRows = dogs.map(e => <tr key={e.bet_id} className="border-t border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800">
        <td className="text-center p-2">{e.dog_name}</td>
        <td className="text-center p-2">{e.breed}</td>
        <td className="text-center p-2">{e.description}</td>
        <td className="text-center p-2">{e.phone}</td>
        <td className="text-center p-2">{e.url_image}</td>
    </tr>);

    let text = dogs.length + 'Pets disponíveis para adoção';
    if (dogs.length === 0) {
        text = 'No momento não possuímos nenhum pet para adoção. Volte um outro dia!';
    }

    return (
        <div className="h-full min-h-screen flex flex-col dark:bg-slate-900">
            <NavBar />
            <div className="flex-1 flex flex-col items-center w-full">
                <div className="flex flex-col items-center justify-center w-full sm:m-2 sm:max-w-lg">
                    <div className="p-2 dark:text-white my-2">{text}</div>

                    {dogs.length > 0 &&
                        <table className="table-auto text-sm w-full bg-slate-200 dark:bg-slate-700 dark:text-white sm:rounded-xl overflow-hidden">
                            <thead>
                                <tr className="border-b-2 border-slate-300 dark:border-slate-500">
                                    <th className="text-center p-2">Nome</th>
                                    <th className="text-center p-2">Raça</th>
                                    <th className="text-center p-2">Descrição</th>
                                    <th className="text-center p-2">Foto</th>
                                    <th className="text-center p-2">Telefone para Contato</th>
                                </tr>
                            </thead>
                            <tbody>{dogRows}</tbody>
                        </table>}
                    <div className="m-2"></div>
                </div>
            </div>
        </div>
    );
}

export default ViewDogs;