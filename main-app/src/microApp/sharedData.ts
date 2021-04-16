interface Shared {
  current: CommonObject;
}

const sharedData: Shared = {
  current: {},
};

export const getSharedData = (): CommonObject => {
  return sharedData.current;
};

export const setSharedData = (data: CommonObject) => {
  sharedData.current = { ...sharedData.current, ...data };
};
