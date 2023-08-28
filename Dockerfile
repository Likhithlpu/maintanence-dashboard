# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install


# Copy the entire project to the container
COPY . .

RUN npm build 
RUN npm install -g serve 


# Set environment variable to production mode
ENV NODE_ENV=production


# Start the application
CMD ["serve", "-s", "build"]
#CMD ["npm", "start"]
