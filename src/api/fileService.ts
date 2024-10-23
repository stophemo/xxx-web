import service from './config/request';

const fileService = {
  async listFiles(inputDTO: FilesGetInputDTO): Promise<FilesGetOutputDTO> {
    return service.post('/api/file/list', inputDTO).then((response) => response.data);
  },

  async getFileInfo(inputDTO: FileInfoGetInputDTO): Promise<FileInfoGetOutputDTO> {
    return service.post('/api/file/get', inputDTO).then((response) => response.data);
  },

  async uploadFileByForm(
    asTask: boolean | undefined,
    filePath: string,
    file: File,
  ): Promise<UploadResult> {
    return service
      .post(
        '/api/file/form',
        { asTask, filePath, file },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then((response) => response.data);
  },

  async uploadFileByStream(
    asTask: boolean | undefined,
    filePath: string,
    fileContents: Uint8Array,
  ): Promise<UploadResult> {
    return service
      .post('/api/file/put', {
        asTask: asTask ? 'true' : 'false',
        filePath,
        fileContents,
      })
      .then((response) => response.data);
  },
};

export default fileService;

export interface FilesGetInputDTO {
  page: number;
  password: string;
  path: string;
  perPage: number;
  refresh: boolean;
}

export interface FilesGetOutputDTO {
  content: FilesContent[];
  header: string;
  provider: string;
  readme: string;
  total: number;
  write: boolean;
}

export interface FileInfoGetInputDTO {
  page: number;
  perPage: number;
  password: string;
  path: string;
  refresh: boolean;
}

export interface FileInfoGetOutputDTO {
  created: string;
  hashInfo: any;
  hashinfo: string;
  header: string;
  isDir: boolean;
  modified: string;
  name: string;
  provider: string;
  raw_url: string;
  readme: string;
  related: any;
  sign: string;
  size: number;
  thumb: string;
  type: number;
}

export interface FilesContent {
  created: string;
  hashInfo: any;
  hashinfo: string;
  isDir: boolean;
  modified: string;
  name: string;
  sign: string;
  size: number;
  thumb: string;
  type: number;
}

interface UploadResult {
  task: {
    id: string;
    name: string;
    state: number;
    progress: number;
    status: string;
    error: string;
  };
}
