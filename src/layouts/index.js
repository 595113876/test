import { LocaleProvider, DatePicker } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import withRouter from 'umi/withRouter';

export default withRouter(props => {
  return (
    <LocaleProvider locale={zhCN}>
      <div>
        <DatePicker />
        <DatePicker.WeekPicker />
      </div>
    </LocaleProvider>
  );
});
