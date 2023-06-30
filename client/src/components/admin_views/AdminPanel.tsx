import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import EditProducts from './EditProducts';
import AddProducts from './AddProducts'
import ViewOrders from './ViewOrders';
import ChangeQR from './ChangeQR';
import { ApiProps } from '../../types/mainTypes';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <h1>{children}</h1>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AdminPanel({ apiData }: { apiData: ApiProps }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '80vh' }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Edit Products" {...a11yProps(0)} />
        <Tab label="Add Products" {...a11yProps(1)} />
        <Tab label="View Orders" {...a11yProps(2)} />
        <Tab label="Change QR Code" {...a11yProps(3)} />
      </Tabs>
      <div className="w-full">
        <TabPanel value={value} index={0}>
          <EditProducts apiData={apiData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddProducts categories={apiData.category} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ViewOrders />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ChangeQR />
        </TabPanel>
      </div>
    </Box>
  );
}