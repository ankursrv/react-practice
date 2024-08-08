const NavigateToPage = () => {
    return (
        <>
            <section className="max-w-[1320px] mx-auto my-10">
                <ul>
                    <li>1. useNavigate : Button ke Click pe ek page se dusre page me redirect krne ke liye useNavigate ka use krte hai.</li>
                    <li>2. useNavigate 'react-router-dom' ka part hai naa ki react-js ka </li>
                    <li>
                        <h4 className="text-2xl font-bold mt-4">How To Use the useNavigate</h4>
                        <div className="flex gap-6">
                            <h6>Step - 1: </h6>
                            <pre>
                                {`Import { useNavigate } from 'react-router-dom'`}
                            </pre>
                        </div>
                        <div className="flex gap-6">
                            <h6>Step - 2: </h6>
                            <pre>
                                {`define the variable: const navigate = useNavigate();`}
                            </pre>
                        </div>
                        <div className="flex gap-6">
                            <h6>Step - 3: </h6>
                            <pre>
                                {`Create Button : <button onClick={()=>useNavigate('/')}> Navigate Home Page </button>`} <br />
                                {`Create Button : <button onClick={()=>useNavigate('/about')}> Navigate Home Page </button>`}
                            </pre>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default NavigateToPage