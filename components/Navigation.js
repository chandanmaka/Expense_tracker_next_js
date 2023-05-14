import { ImStatsBars } from 'react-icons/im';

function Navigation() {
  return (
    <header className='container px-6 py-6 max-w-2xl mx-auto'>
    <div className="flex items-center justify-between">
      
    
      <div className="flex items-center gap-2">
        <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
          <img 
            className="object-cover w-full h-full" 
            src="https://this-person-does-not-exist.com/img/avatar-gen117199555687bcac271270102c8b2c81.jpg" 
            alt="ProfilePicture"/>
        </div>
        <small>Hii Chandan</small>
      </div>

      <nav className="flex items-center gap-2">
        
        <div>
          <ImStatsBars className="text-2xl" />
        </div>
        <div>
          <button type="submit" className='btn btn-danger'>Logout</button>
        </div>
      </nav>
    </div>
    
  </header>
  )
}

export default Navigation