const token = localStorage.getItem("token");
const headers = {
	"Content-Type": "application/json",
	Authorization: `Bearer ${token}`,
};

export default headers;
