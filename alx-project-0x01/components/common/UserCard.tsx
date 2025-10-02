import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-blue-500 underline">{website}</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.suite}, {address.street}, {address.city}
        </p>
        <p className="text-gray-500">Zip: {address.zipcode}</p>
        <p className="text-gray-500">Geo: {address.geo.lat}, {address.geo.lng}</p>
      </div>

      <div className="mt-4 text-sm text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
