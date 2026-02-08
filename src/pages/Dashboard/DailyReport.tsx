import { useEffect, useState } from 'react';
import { getDailyReport } from '@/api/daily/common';
import type { DailyReport } from '@/api/daily/types';
import { formatReportDate, formatSubmitTime } from '@/api/daily/types';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Eye } from 'lucide-react';

export default function DailyReportList() {
  const [rowData, setRowData] = useState<DailyReport[]>([]);
  const [loading, setLoading] = useState(false);

  const columns: ColumnsType<DailyReport> = [
    {
      title: '日报日期',
      dataIndex: 'reportDate',
      key: 'reportDate',
      width: 140,
      render: formatReportDate,
      sorter: (a, b) => new Date(a.reportDate).getTime() - new Date(b.reportDate).getTime(),
    },
    {
      title: '姓名',
      dataIndex: 'createUserName',
      key: 'createUserName',
      width: 100,
      render: (v: string) => v ?? '-',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
      width: 100,
      render: (v: string) => v ?? '-',
    },
    {
      title: '总工时',
      dataIndex: 'totalWorkingHours',
      key: 'totalWorkingHours',
      width: 90,
      sorter: (a, b) => a.totalWorkingHours - b.totalWorkingHours,
    },
    {
      title: '提交时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 120,
      render: formatSubmitTime,
      sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => (
        <span
          className="inline-flex items-center rounded px-2 py-0.5 text-sm"
          style={{ backgroundColor: 'rgba(34,197,94,0.2)', color: '#22c55e' }}
        >
          {status === 'approved' || status === '已审核' ? '已审核' : status || '-'}
        </span>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: (_: unknown, record: DailyReport) => {
        const viewed = record.viewed;
        return (
          <button
            type="button"
            className="inline-flex items-center gap-1 border-0 bg-transparent cursor-pointer p-0"
            style={{ color: viewed ? '#a1a1aa' : '#3b82f6' }}
            onClick={() => {/* TODO: 查看详情 */}}
          >
            <Eye size={14} />
            {viewed ? '已查看' : '查看'}
          </button>
        );
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getDailyReport();
        if (res.code === 200) {
          setRowData(res.data);
        }
      } catch (error) {
        console.error('Failed to fetch daily reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-zinc-100">日报列表</h2>
      </div>
      
      <div className="flex-1 w-full min-h-[500px]">
        <Table
          columns={columns}
          dataSource={rowData}
          rowKey="id"
          loading={loading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `共 ${total} 条`,
            pageSizeOptions: ['10', '20', '50', '100'],
          }}
          scroll={{ y: 'calc(100vh - 300px)' }}
        />
      </div>
    </div>
  );
}
