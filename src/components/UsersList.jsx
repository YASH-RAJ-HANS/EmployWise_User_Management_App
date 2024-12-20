import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [hasMore, setHasMore] = useState(true); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const navigate = useNavigate();

  const page = parseInt(searchParams.get("page")) || 1; 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUsers(page);
    }
  }, [page, navigate]);

  useEffect(() => {
    handleSearch(searchQuery); 
  }, [searchQuery, users]);

  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      const fetchedUsers = response.data.data;
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers); 
      setHasMore(fetchedUsers.length > 0);
    } catch (error) {
      alert("Failed to fetch users.");
    }
  };

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(lowerQuery) ||
        user.last_name.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery)
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://reqres.in/api/users/${id}`);
      console.log("delete",response )
      alert("User deleted successfully.");
      fetchUsers(page);
    } catch (error) {
      alert("Failed to delete user.");
    }
  };

  const changePage = (newPage) => {
    setSearchParams({ page: newPage }); 
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Users List</h2>

        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm w-full max-w-md"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{`${user.first_name} ${user.last_name}`}</h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <div className="flex mt-4 space-x-2">
                <button
                  onClick={() => navigate(`/users/edit/${user.id}`)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => changePage(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 rounded-md ${
              page === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 transition"
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => changePage(page + 1)}
            disabled={!hasMore}
            className={`px-4 py-2 rounded-md ${
              !hasMore
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 transition"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
