# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

RUN npm run build

# Install a lightweight web server
RUN npm install -g http-server

# Expose the port your app runs on
EXPOSE 3000

# Start the application with http-server
#CMD ["http-server", "build"]

CMD ["npm", "start"]
