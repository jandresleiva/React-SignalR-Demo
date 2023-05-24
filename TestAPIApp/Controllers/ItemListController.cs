using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using TestAPIApp.Hubs;
using TestAPIApp.Models;

namespace Chatty.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemListController : ControllerBase
    {
        private readonly IHubContext<ItemListHub, IItemListClients> _itemsHub;

        public ItemListController(IHubContext<ItemListHub, IItemListClients> itemsHub)
        {
            _itemsHub = itemsHub;
        }

        [HttpPost("addItem")]
        public async Task AddItem([FromBody] string itemName)
        {
            await _itemsHub.Clients.All.AddItem(itemName);
        }

        [HttpPost("editItem")]
        public async Task EditItem(ItemModel item)
        {
            await _itemsHub.Clients.All.EditItem(item);
        }

        [HttpPost("toggleItem")]
        public async Task ToggleItem([FromBody] int itemId)
        {
            await _itemsHub.Clients.All.ToggleItem(itemId);
        }
    }
}