using TestAPIApp.Models;

namespace TestAPIApp.Hubs
{
    public interface IItemListClients
    {
        Task AddItem(string itemName);
        Task EditItem(ItemModel item);
        Task ToggleItem(int itemId);
    }
}
