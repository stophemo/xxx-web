// 分页查询结果类型
export type PageResult<T> = {
  // 总页数
  totalPage: number;
  // 总记录数
  totalRow: number;
  // 数据列表
  list: T[];
};

// 分页查询输入参数类型
export type PageParam<T> = {
  // 当前页码
  pageNumber: number;
  // 每页数据数量
  pageSize: number;
  // 过滤Dto对象
  filter: T;
};