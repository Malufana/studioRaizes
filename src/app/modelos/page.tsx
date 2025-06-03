import '../../styles/globals.css';
import ModeloCard from '@/component/ModeloCard';

export default function Modelos(){
    return(
        <div className='flex flex-col items-center justify-center min-h-screen p-4 space-y-6'>
            <div>
                <h1 className='text-white text-5xl font-bold mb-8 text-center'>Selecione um modelo para continuar</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
                <ModeloCard/>
            </div>
        </div>
    );
}