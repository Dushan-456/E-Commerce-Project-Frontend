import error from '../assets/Images/404.webp'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {

      const navigate = useNavigate();

  return (
   <div className="flex w-screen h-screen gap-3 flex-col items-center justify-center">
  <h1 className="text-4xl font-bold mt-4">Sorry !</h1>
       <Button variant="outlined" onClick={() => navigate("/")} startIcon={<HomeIcon /> }>
        Go to Home
      </Button>
  <img src={error} alt="404" style={{ width: "50%" }} />
</div>
  )
}

export default Error404Page
