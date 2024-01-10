[
    [
        "AMERICA",
        [
            ["PERÚ", ["Lima", "Arequipa", "Chimbote", "Trujillo", "Cajamarca"]],
            ["ARGENTINA", ["Cordova", "Rosario", "Mendoza", "Tucuman"]],
            ["MÉXICO", ["Guadalajara", "Monterrey", "Hidalgo", "Yucatan", "Jalisco"]],
            ['BRASIL' [ 'Sao Paulo', 'Rio de Janeiro' ,'Porto Alegre' , 'Bahia' , 'Belo Horizonte']],
            ["COLOMBIA", ["Bogota", "Cali", "Barranquilla", "Medellín"]],
        ],
    ],
    [
        "EUROPA",
        [
            ["ESPAÑA", ["Madrid", "Barcelona", "Valencia", "Sevilla", "Granada"]],
            ["FRANCIA", ["Paris", "Marsella", "Lyon", "Niza", "Burdeos"]],
            ["ITALIA", ["Roma", "Florencia", "Milan", "Verona", "Turin"]],
            ["ALEMANIA", ["Berlin", "Munich", "Hamburgo", "Bonn"]],
        ],
    ],
    [
        "ASIA",
        [
            ["CHINA", ["Pekin", "Shangai", "Canton"]],
            ["JAPÓN", ["Tokio", "Osaka", "Yokohama"]],
            ["INDIA", ["Calcuta", "Bombay"]],
        ],
    ],
]



# ['BRASIL' [ 'Sao Paulo', 'Rio de Janeiro' ,'Porto Alegre' , 'Bahia' , 'Belo Horizonte']]

import tkinter as tk
from tkinter import ttk
import re

sequence = "AMERICA(PERÚ(Lima,Arequipa,Chimbote,Trujillo,Cajamarca);ARGENTINA(Cordova,Rosario,Mendoza,Tucuman);MÉXICO(Guadalajara,Monterrey,Hidalgo,Yucatan,Jalisco);BRASIL(Sao Paulo,Rio de Janeiro,Porto Alegre,Bahia,Belo Horizonte);COLOMBIA(Bogota,Cali,Barranquilla,Medellín))EUROPA(ESPAÑA(Madrid,Barcelona,Valencia,Sevilla,Granada);FRANCIA(Paris,Marsella,Lyon,Niza,Burdeos);ITALIA(Roma,Florencia,Milan,Verona,Turin);ALEMANIA(Berlin,Munich,Hamburgo,Bonn))ASIA(CHINA(Pekin,Shangai,Canton);JAPÓN(Tokio,Osaka,Yokohama);INDIA(Nueva Delhi,Calcuta,Bombay))"
tokens = re.split(r'([();,])', sequence)
# tokens = [token for token in tokens if token.strip() != '']

result = []
level = 0
current_continent = None
current_country = None

for token in tokens:
    print("token: ", token)
    if token.isalnum():
        if level == 0:
            current_continent = [token, []]
            result.append(current_continent)
        elif level == 1:
            current_country = [token, []]
            current_continent[1].append(current_country)
        elif level == 2:
            current_country[1].append(token)
    elif token == '(':
        level += 1
    elif token == ')':
        level -= 1

print(f'Lista de frutas: {result}')

# Crear la ventana principal
ventana = tk.Tk()
ventana.title(" Codigo compilando")

# Crear un TreeView con dos columnas
tree = ttk.Treeview(ventana, columns=("Elemento", "Detalle"), show="headings")
tree.heading("Elemento", text="Elemento")
tree.heading("Detalle", text="Detalle")

# Agregar los elementos
for continente in result:
    select_conti = "■"+ str(continente[0])
    iden_conti = tree.insert("", "end", values=(select_conti, "continente"))
    for pais in continente[1]:
        slect_pais = "    •" + str(pais[0])
        iden_pais = tree.insert(iden_conti, "end", values=(slect_pais, "pais"))
        for ciudad in pais[1]:
            select_ciudad = "          -"+ str(ciudad)
            tree.insert(iden_pais, "end", values=("          -"+ ciudad, "ciudad"))

# Posicionar los elementos en la ventana
tree.pack(padx=10, pady=10)

# Iniciar el bucle principal
ventana.mainloop()