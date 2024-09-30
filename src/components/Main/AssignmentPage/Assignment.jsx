import React from 'react';
import './assignment.css';

export default function Assignment() {
  const obj = {
    id: '10002',
    name: 'Eco-Friendly Water Bottle',
    description: 'Stay hydrated with our durable, eco-friendly water bottle.',
    price: 14.99,
    currency: 'USD',
    imageURL: 'https://example.com/images/product-10002.jpg',
  };

  const list = Object.entries(obj).reduce((rows, [key, value], index) => {
    rows.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{index}</td>
      </tr>
    );
    return rows;
  }, []);

  return (
    <main className="assignment-main">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </main>
  );
}
