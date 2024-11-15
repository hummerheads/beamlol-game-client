# Use a Node.js base image to build the React app
FROM node:18 as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React application with Vite
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build output to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the new port (e.g., 8081)
EXPOSE 8081

# Update Nginx configuration to listen on the new port
RUN sed -i 's/listen       80;/listen       8081;/' /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]