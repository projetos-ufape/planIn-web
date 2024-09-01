import LogoDark from '../../assets/planit-dark.svg';
import LogoLight from '../../assets/planit-light.svg';
import { Box } from '@mui/material';
import useColorTheme from '../../hooks/useColorTheme';
const LogoHeader = () => {
  const { mode } = useColorTheme();
  return (
    <Box
    sx={{
      padding: '23px',
      marginLeft: '70px',
      width: '85vw'
    }}
    >
      <img src={mode === 'light' ? LogoLight : LogoDark} alt="logo" />
    </Box>
  );
};

export default LogoHeader;
