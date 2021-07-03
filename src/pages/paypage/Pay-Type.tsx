import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // 랜덤 계좌번호 생성
  const [bankAccountNum, setBankAccountNum] = useState<any>(Math.floor(Math.random() * 10000000000000));
  function chageLangSelect() {
    setBankAccountNum ((bankAccountNum: any) => setBankAccountNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="무통장 입금" {...a11yProps(0)} />
        <Tab label="카드결제" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <select name="" id="" onChange={chageLangSelect}>
          <option value="" selected>은행선택</option>
          <option value="">국민은행</option>
          <option value="">우리은행</option>
        </select>
        입금계좌 :<b>{bankAccountNum}</b> 우리은행
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="card">
          <div className="info">
            <div className="card_num">
              <span>카드정보</span>
              <select name="" id="">
                <option value="우리">우리</option>
                <option value="국민">국민</option>
              </select>
              <input type="text" name="" id="" maxLength={4} />-
              <input type="text" name="" id="" maxLength={4} />-
              <input type="password" name="" id="" maxLength={4} />-
              <input type="text" name="" id="" maxLength={4} />
               / 유효기간 <input type="text" name="" id="" maxLength={4} placeholder="(MMYY)" />
            </div>            
            <div className="division50">
              <input type="text" name="" id="" maxLength={3} placeholder="CVC (카드 뒷면 3자리)"/>
            </div>
            <div className="division50">
              <input type="password" name="" id="" maxLength={2} placeholder="카드 비밀번호 (비밀번호 앞 2자리 숫자)" />
            </div>
            
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
