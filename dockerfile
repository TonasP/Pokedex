# Etapa 1: Base da Imagem
# Usamos uma imagem oficial do Node.js. A tag 'alpine' resulta em uma imagem menor.
# Escolha a versão do Node que seu projeto utiliza, por exemplo: 18, 20, etc.
FROM node:18-alpine

# Etapa 2: Definir o Diretório de Trabalho
# Define o diretório padrão dentro do contêiner.
WORKDIR /app

# Etapa 3: Copiar e Instalar as Dependências
# Copia o package.json e o package-lock.json para o contêiner.
# O asterisco (*) garante que ambos os arquivos sejam copiados.
COPY package*.json ./

# Instala apenas as dependências de produção para manter a imagem enxuta.
# 'npm ci' é mais rápido e seguro para builds automatizados do que 'npm install'.
RUN npm ci --only=production

# Etapa 4: Copiar o Código da Aplicação
# Copia o restante dos arquivos do seu projeto para o diretório de trabalho no contêiner.
COPY . .

# Etapa 5: Expor a Porta
# Informa ao Docker que a aplicação dentro do contêiner estará escutando nesta porta.
# Troque 3000 pela porta que sua aplicação utiliza, se for diferente.
EXPOSE 3000

# Etapa 6: Comando para Iniciar a Aplicação
# Define o comando que será executado quando o contêiner iniciar.
# Altere 'index.js' se o arquivo de entrada da sua aplicação tiver outro nome.
CMD [ "node", "index.js" ]