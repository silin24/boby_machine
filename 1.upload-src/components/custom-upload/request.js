import { entries } from '@/utils/utils'

const processResponse = (response) => {
  if (typeof response === 'string') {
    try {
      return JSON.parse(response)
    } catch (e) {
      return response
    }
  }
  return response
}

const request = ({
  url, // 上传url
  name, // 上传文件的key值
  file, // 上传的file对象
  data, // 上传文件以外的其他参数，object
  onSuccess, // 上传成功回调
  onError, // 上传错误回调
  onProgress // 上传中的进度回调
}) => {
  const xhr = new XMLHttpRequest()
  const formData = new FormData()
  // 传入文件key,value对
  formData.append(name, file)
  // 遍历对象，方便为formData添加key,value对
  entries(data, (key, val) => formData.append(key, val))
  // 监听上传的progress事件，来监听上传过程，显示进度
  xhr.upload.addEventListener('progress', (e) => {
    e.percent = e.loaded / e.total * 100
    onProgress(e)
  })

  xhr.open('POST', url)
  xhr.send(formData)
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = processResponse(xhr.response)
      onSuccess(response)
    } else {
      onError(new Error('upload request failed!'))
    }
  })

  xhr.addEventListener('error', (e) => {
    onError(e)
  })
  return xhr
}

export default request