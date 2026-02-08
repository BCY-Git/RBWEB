const WEEKDAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

export function formatReportDate(value: string): string {
  if (!value) return '-';
  const d = new Date(value);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${mm}-${dd} ${WEEKDAYS[d.getDay()]}`;
}

export function formatSubmitTime(value: string): string {
  if (!value) return '-';
  const d = new Date(value);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${mm}-${dd} ${h}:${min}`;
}

export interface DailyReport {
  id: number;
  reportDate: string;
  todayWork: string;
  tomorrowPlan: string;
  totalWorkingHours: number;
  createUser: number;
  createTime: string;
  updateUser: number;
  updateTime: string;
  status: string;
  approvalUser: number;
  approvalUsers: string;
  approvalTime: string;
  approvalUserName: string;
  /** 提交人姓名，接口有则显示 */
  createUserName?: string;
  /** 部门，接口有则显示 */
  department?: string;
  /** 是否已查看 */
  viewed?: boolean;
}
