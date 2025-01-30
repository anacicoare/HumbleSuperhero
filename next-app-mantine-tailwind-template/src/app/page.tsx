"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Container, TextInput, Button, Table, Title, Card } from "@mantine/core";
import { motion } from "framer-motion";

interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}


export default function Home() {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");
  const [superheroes, setSuperheroes] = useState([]);


  // Fetch superheroes from the Nestjs API
  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/superheroes");
      setSuperheroes(response.data);
    } catch (error) {
      console.error("Failed to fetch superheroes.");
    }
  };


  // Fetch superheroes on page first load
  useEffect(() => {
    fetchSuperheroes();
  }, []);


  // Handle new superhero form submission
  const handleSubmit = async () => {
    if (!name || !superpower || !humilityScore) return;

    try {
      await axios.post("http://localhost:8000/superheroes", {
        name,
        superpower,
        humilityScore: parseInt(humilityScore),
      });

      setName("");
      setSuperpower("");
      setHumilityScore("");
      fetchSuperheroes();
    } catch (error) {
      console.error("Failed to add superhero.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-800 via-teal-800 to-lime-200 text-white">
      <Container className="py-16" size={'lg'}>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title className="text-5xl font-extrabold tracking-wide">
            Welcome to the Superhero Hub
          </Title>
          <p className="mt-4 text-lg">Add new superheroes and explore their amazing powers!</p>
        </motion.div>

        {/* Layout with two columns */}
        <div className="flex gap-8">
          
          {/* Left: Superhero List */}
          <motion.div
            className="w-3/5 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title order={2} className="text-3xl font-bold mb-6 text-center">
              Superhero Roster
            </Title>

            {/* Display fetched and newly created superheroes in a table */}
            {superheroes.length === 0 ? (
              <p className="text-center">No superheroes found.</p>
            ) : (
              <Table highlightOnHover className="bg-white bg-opacity-90 rounded-lg">
                <thead>
                  <tr>
                    <th className="text-indigo-900 font-bold p-4">Name</th>
                    <th className="text-indigo-900 font-bold p-4">Superpower</th>
                    <th className="text-indigo-900 font-bold p-4">Humility Score</th>
                  </tr>
                </thead>
                <tbody>
                  {superheroes.map((hero: Superhero, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="py-2 px-4 text-gray-800 text-center">{hero.name}</td>
                      <td className="py-2 px-4 text-gray-800 text-center">{hero.superpower}</td>
                      <td className="py-2 px-4 text-gray-800 text-center">{hero.humilityScore}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </Table>
            )}
          </motion.div>

          {/* Right: Add Superhero Form */}
          <motion.div
            className="w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card shadow="xl" className="p-6 bg-white bg-opacity-20 rounded-lg">
              <Title order={3} className="text-2xl font-semibold mb-6 text-center text-white">
                Add a New Superhero
              </Title>
              <TextInput
                label="Name"
                placeholder="Enter superhero name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mb-4"
                styles={{ label: { color: "white" } }}
              />
              <TextInput
                label="Superpower"
                placeholder="Enter superhero superpower"
                value={superpower}
                onChange={(e) => setSuperpower(e.target.value)}
                required
                className="mb-4"
                styles={{ label: { color: "white" } }}
              />
              <TextInput
                label="Humility Score (0-10)"
                placeholder="Enter humility score"
                value={humilityScore}
                onChange={(e) => setHumilityScore(e.target.value)}
                type="number"
                required
                className="mb-4"
                styles={{ label: { color: "white" } }}
              />
              <div className="flex justify-center">
                <Button
                  onClick={handleSubmit}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Add Superhero
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
