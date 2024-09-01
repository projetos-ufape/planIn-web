import Logo from '../../assets/Planit.svg'
import { Box } from '@mui/material';
const LogoHeader = () => {
  return (
    <Box
    sx={{
      padding: '23px',
      marginLeft: '70px',
      width: '85vw'
    }}
    >
      <img src={Logo} alt="logo" />
    </Box>
  );
};

export default LogoHeader;
