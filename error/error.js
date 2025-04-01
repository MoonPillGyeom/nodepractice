/**
 * 에러를 throw하면 노드 프로세스가 멈추기에 try-catch로 잡아야함
 */

setInterval(() => {
  console.log('start');
  try {
    throw new Error('server network error');
  } catch (error) {
    console.error(error);
  }
}, 1000);
