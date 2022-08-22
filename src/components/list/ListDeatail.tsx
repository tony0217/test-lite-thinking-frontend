import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessIcon from '@mui/icons-material/Business';
import NumbersIcon from '@mui/icons-material/Numbers';
import CallIcon from '@mui/icons-material/Call';

import { Company } from '@core/interfaces/company.interface'


function ListDeatail({ company }: ListDeatailProps) {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText
          primary={company.address}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NumbersIcon />
        </ListItemIcon>
        <ListItemText
          primary={company.nit}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CallIcon />
        </ListItemIcon>
        <ListItemText
          primary={company.mobilephone}
        />
      </ListItem>
    </List>
  )
}

interface ListDeatailProps {
  company: Company
}
export default ListDeatail