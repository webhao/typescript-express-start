# 数据结构

```typescript

// 合作社信息
interface Cooperative {
  cooperativeId: number; // 合作社 ID
  cooperativeName: string; // 合作社名称
  cooperativeLocation:string; // 合作社位置
  cooperativeOwner: string; // 合作社所有者
  cooperativePhone: number; // 合作社联系方式
  cooperativePosition?: any; // 合作社经纬度
  createdUserID?: number; // 合作社创建人
}

// 用户信息
interface User {
  uid: number; // 用户 ID
  username: string; // 用户名称
  userEmail: string; // 用户 Email
  userDisplayName: string; // 用户别名
  roleType: number; // 角色类型
  roleName: string; // 角色名称
  userState: string; // 用户状态
  deviceId: number; // GPS 设备 ID
  cooperativeId: number; // 合作社 ID
  externalUserId: number; // server用户 ID
  externalEnterpriseId: number; // server 企业 ID
  connectionInfo: number; // 联系方式
}

// 农事信息
interface  FarmWork {
  farmWorkId: number; // 农事 ID;
  farmWorkName: string; // 农事名称
  cooperativeId: number; // 合作社 ID
  farmWorkType: number; // 农事类型
  createdUserID?: number; // 农事创建人
}

// 机具信息
interface FarmImplement {
  implementID: number; // 机具 ID
  implementType: string; // 机具类型
  implementModel?: string; // 机具型号
  implementSerial?: string; // 机具编号
  implementState?: string; // 机具状态
  implementWidth: number; // 机具幅宽
  cooperativeID: number; // 合作社 ID
  createdUserID?: number; // 机具创建人
}

// 种子信息
interface Seed {
  seedId: number; // 种子 ID
  seedName: string; // 种子名称
  seedType?: string; // 种子类型
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 种子创建人
}

// 农药信息
interface Pesticide {
  pesticideId: number; // 农药 ID
  pesticideName: string; // 农药名称
  pesticideType?: string; // 农药类型
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 农药创建人
}

// 化肥信息
interface Fertilizer {
  fertilizerId: number; // 化肥 ID
  fertilizerName: string; // 化肥名称
  fertilizerType?: string; // 化肥类型
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 化肥创建人
}

// 地标信息
interface Flag {
  flagId: numebr; // 地标 ID
  flagSerial?: string; // 地标编号
  flagName?: string; // 地标名称
  flagNotes?: string; // 地标详情
  flagType?: number; // 地标类型
  flagGeojson?: any; // 地标 Geojson
  flagGeometry?: any; // 地标 Geometry
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 地标创建人
}

// GPS设备
interface GPSDevice {
  gpsDeviceId: number; // GPS设备 ID
  gpsDeviceSerial?: string; // GPS设备编号
  gpsDeviceBatteryLevel?: number; // GPS设备电量
  gpsDeviceGsmLevel?: number; // GPS设备信号
  gpsDeviceGpsStatus?: boolean; // GPS 设备状态
  cooperativeId?: number; // 合作社 ID
  gpsDeviceType?: string; // GPS 服务类型
}

// GPS设备使用记录
interface GPSUseRecord {
  gpsUseRecordID: number; // GPS记录 ID
  workLandID: number; // 地块任务 ID
  gpsDeviceID: number; // GPS 设备 ID
  beginTime: number|Date; // 开始时间
  endTime?: number|Date; // 结束时间
}

// 地块信息
interface Land {
  landId: number; // 地块 ID
  landDisplaySerial?: string; // 地块编号
  landSize?: number; // 地块测算值
  landPerimeter?: number; // 地块周长
  landCrop?: string; // 地块作物
  landGeojson: any; // 地块 Geojson
  landType?: LAND_TYPE; // 地块类型 LAND_TYPE: 0 | 1
  landGeometry?: any; // 地块 Geometry
  landGeoCenter?: any; // 地块中心点
  cooperativeId: number; // 合作社 ID
  landRemark: string; // 地块备注
  createdUserID: number; // 地块创建人 ID
  createdUserName?: string; // 地块创建人名称
  contractArea?: number; // 合同面积
  owner?: string; // 权属人
  ridgeCount?: number; // 垄数
  ridgeLength?: number; // 垄长
  ownerPhoneNumber?: string; // 权属人电话
}

// 农机信息
interface Machinery {
  machineryId: number; // 农机 ID
  machineryType: string; // 农机类型
  machineryModel: string; // 农机型号
  machinerySerial: string; // 农机编号
  isMachineryHealth: boolean; // 农机健康度
  machineryState: string; // 农机状态
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 创建人
}

// 角色
interface Role {
  id: number; // 角色 ID
  roleType?: number; // 角色类型
  roleName?: string; // 角色名称
  roleRules?: any; // 角色权限  
  cooperativeId: number; // 合作社 ID
}

// 农事任务
interface Task {
  taskId: number; // 农事任务 ID
  taskFarmWorkId: number; // 任务农事类型
  taskFarmWorkName: string; // 任务农事名称
  taskType: number; // 任务类型 0 | 1
  remindTime?: number|Date; // 提醒时间
  startTime: number|Date; // 开始时间
  endTime: number|Date; // 结束时间
  cooperativeId: number; // 合作社 ID
  createdUserID?: number; // 创建人
  taskStatus?: number; // 任务状态
}

// 分配任务
interface TaskDetail {
  taskDetailId: number; // 分配任务 ID
  taskId: number; // 农事任务 ID
  farmerId?: number; // 人员 ID
  machineryId: number; // 农机 ID
  cooperativeId: number; // 合作社
  totalLandSize: number; // 任务总面积
  totalLandCount: numebr; // 任务地块总数
  completeLandSize: number; // 任务完成面积
  completeLandCount: number; // 任务完成总数
  customInputs?: any; // 自定义字段
  remark?: string; // 分配任务备注
  taskDetailState?: number; // 分配任务状态
}

// 分配任务关联地块
interface TaskDetailWithLands {
  taskDetailWithLandId: number; // ID
  taskDetailId: number; // 分配任务 ID
  taskId: number; // 农事任务 ID
  landId: number; // 地块 ID
  assets: any; // 地块农资json数据
  customInputs: any; // 地块自定义字段
  remark: string; // 地块任务完成时备注信息
  status: number; // 地块任务状态
  workTimeBegin: number|Date; // 地块任务开始时间
  workTimeEnd: number|Date; // 地块任务结束时间
  workingTime: number; // 地块实际用时
  workingDistance: number; // 地块任务路径长度
  workingSpeed: number; // 地块任务平均速度
  workAssess: number; // 地块任务评分
  workGeometry: any; // 地块任务路径geometry
  workHistory: any; // 地块任务状态历史
}

interface CustomInput {
  customInputId: number; // 自定义字段 ID
  customInputName: string; // 自定义字段名称
  customInputKeyType: number; // 自定义字段类型
  customInputKeyId: number; // 主选类型 ID(现都为cooperativeID)
  customInputRequired: boolean; // 是否必填
  customInputUnit: number; // 单位
  customInputType: number; // 数据类型
  customInputOptions: any; // 数据备选项
  customInputDefaultValue: string; // 默认值
}

interface CustomInputValue {
  customInputValueId: number; // 值 ID
  customInputId: number; // 自定义字段 ID
  customInputValueInstanceId: number; // 实例 ID
  customInputValue: string; // 值
}

```
