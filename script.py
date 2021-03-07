import eel
import mysql.connector

eel.init("web")
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="billing_sys"
)
conn.cursor()


# Give folder containing web files

# Expose this function to Javascript


@eel.expose
def insert(uid, iName, iPrice, amount):
    itemId = str(uid)
    itemName = str(iName)
    itemPrice = str(iPrice)
    amount = str(amount)
    insertcursor = conn.cursor()

    sql = (
        "INSERT INTO `billing`(`id`, `itemName`, `itemPrice`, `amount`) VALUES (%s,%s,%s,%s)")
    insertcursor.execute(sql, (itemId, itemName, itemPrice, amount))


eel.start('main.html', mode='edge', size=(600, 200), )    # Start
