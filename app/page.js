import ExpenseCategoryItem from '@/components/ExpenseCategoryItem';
import Navigation from '@/components/Navigation';
import { currencyFormatter } from '@/lib/utils';


const DummyData = [
  {
    id:1,
    amount:1111111,
    title:"Entertainement",
    color:"#efeffc"
  },
  {
    id:2,
    amount:1111111,
    title:"Gas",
    color:"#efeffc"
  },
  {
    id:3,
    amount:1111111,
    title:"Travel",
    color:"#efeffc"
  }
]

export default function Home() {
  return (
    <main className='container max-w-2xl px-6 mx-auto'>
      <section className='py-3'>
        <small className='text-gray-400 text-md'>My Balance</small>
        <h2 className='text-4xl font-bold'>{ currencyFormatter(1000000) }</h2>
      </section>
      <section className='flex items-center gap-2 py-3'>
        <button className='btn btn-primary'>+ Expenses</button>
        <button className='btn btn-primary-outline'>+ Income</button>
      </section>
      <section className='py-6'>
        <h3 className='text-2xl'>My Expenses</h3>
        <div className='flex flex-col gap-4 mt-6'>
          { DummyData.map(expense => {
              return(<ExpenseCategoryItem color={expense.color} amount={expense.amount} title={expense.title}/>) 
            })
          }
          
          
          
        </div>
        
      </section>
    </main>
    
  );
}
