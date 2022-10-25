const getMenuList = async () => {
  try {
    const result = await fetch("/api/lunch", {
      method: "GET",
    });
    return await result.json();
  } catch (error) {
    console.error(error);
  }
};

export { getMenuList };
