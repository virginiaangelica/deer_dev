import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const FormKelolaMember = () => {
  const [members, setMembers] = useState([
    { no: 1, nama: "Andi Pratama", id: "081234567890", level: "Silver" },
    { no: 2, nama: "Jordi Himansyah", id: "082345678901", level: "Gold" },
    { no: 3, nama: "Khairul Bardansyah", id: "083456789012", level: "Platinum" },
    { no: 4, nama: "Syahputra", id: "084567890123", level: "Reguler" },
    { no: 5, nama: "Budi", id: "085678901234", level: "Platinum" },
    { no: 6, nama: "Ramadhon", id: "086789012345", level: "Silver" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [formData, setFormData] = useState({
    no: members.length + 1,
    nama: "",
    id: "",
    level: "",
  });

  const handleOpenModal = (member = null) => {
    setCurrentMember(member);
    setFormData(
      member || {
        no: members.length + 1,
        nama: "",
        id: "",
        level: "",
      }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (currentMember) {
      // Edit member
      setMembers(
        members.map((member) =>
          member.no === currentMember.no ? formData : member
        )
      );
    } else {
      // Add new member
      setMembers([...members, formData]);
    }
    handleCloseModal();
  };

  const handleDelete = (no) => {
    setMembers(members.filter((member) => member.no !== no));
  };

  return (
    <div>
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">Kelola Member</h2>

      <div className="bg-white p-6 shadow-md rounded-lg">
        {/* Button to Add Member */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
          onClick={() => handleOpenModal()}
        >
          Tambah Member
        </button>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Nama</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Level</th>
              <th className="border border-gray-300 px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.no} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{member.no}</td>
                <td className="border border-gray-300 px-4 py-2">{member.nama}</td>
                <td className="border border-gray-300 px-4 py-2">{member.id}</td>
                <td className="border border-gray-300 px-4 py-2">{member.level}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-1 rounded flex items-center justify-center hover:bg-green-600"
                      onClick={() => handleOpenModal(member)}
                    >
                      <FaEdit className="mr-1" />
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded flex items-center justify-center hover:bg-red-600"
                      onClick={() => handleDelete(member.no)}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">
              {currentMember ? "Edit Member" : "Tambah Member"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">ID</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Level</label>
                <input
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  {currentMember ? "Simpan" : "Tambah"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Tutup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormKelolaMember;
